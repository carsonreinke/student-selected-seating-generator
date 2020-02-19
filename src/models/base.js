let nextId = 0;
const subclasses = {};

const PROP_REF = '__ref__',
    PROP_CLASS = '__class__',
    PROP_OBJECT = '__object__',
    PROP_ID = 'id',
    OBJECT = 'object';

export default class Base {
    constructor() {
        if (!subclasses[this.constructor.name]) {
            subclasses[this.constructor.name] = this.__proto__;
        }
        this.id = nextId++;
    }

    /**
     * Converts object(s) into a format capable of persistence
     * 
     * @param Object refs
     * @returns Object
     */
    marshal(refs) {
        const object = {
            [PROP_CLASS]: this.constructor.name,
        };
        //Immediately add current object for short-circuit
        refs[this.id] = object;

        //Re-usable closure for looking up exisitng object or instead marshalling
        const lookupOrMarshal = (value) => {
            //Provide reference to object
            let ref = refs[value.id];
            if (!ref) {
                ref = value.marshal(refs);
            }
            return {
                [PROP_REF]: ref.id,
            };
        };

        //Go through each property of object
        for (let [key, value] of Object.entries(this)) {
            switch (typeof (value)) {
                case OBJECT:
                    //Null is an object
                    if (value === null) {
                        object[key] = null;
                    }
                    else if (Array.isArray(value)) {
                        object[key] = value.map((kv) => {
                            return lookupOrMarshal(kv);
                        });
                    }
                    else {
                        object[key] = lookupOrMarshal(value);
                    }
                    break;

                default:
                    object[key] = value;
            }
        }

        return object;
    }

    /**
     * 
     * @param Object object 
     * @param Object refs
     */
    static unmarshal(object, refs) {
        const dest = new subclasses[object.__class__].constructor;
        refs[object.id][PROP_OBJECT] = dest;

        //Re-usable closure for looking up exisitng object or instead unmarshalling
        const lookupOrUnmarshal = (value) => {
            let ref = refs[value.__ref__];
            let obj = ref[PROP_OBJECT]; //See if already unmarshalled
            if (!obj) {
                //Unmarshall the object
                obj = this.unmarshal(ref, refs);
            }
            return obj;
        };

        for (let [key, value] of Object.entries(object)) {
            //Ignore marshalling related properties
            if (key === PROP_ID || key === PROP_OBJECT || key === PROP_CLASS) {
                continue;
            }

            switch (typeof (value)) {
                case OBJECT:
                    if (value === null) {
                        dest[key] = null;
                    }
                    else if (Array.isArray(value)) {
                        dest[key] = value.map((kv) => {
                            return lookupOrUnmarshal(kv);
                        });
                    }
                    else {
                        dest[key] = lookupOrUnmarshal(value);
                    }
                    break;

                default:
                    dest[key] = value;
            }
        }

        return dest;
    }
}