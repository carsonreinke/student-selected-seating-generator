import Base from '@/models/base';

class Mock extends Base {}

const Related = class extends Base {
    constructor() {
        super();
        this.related = null;
        this.property = null;
    }
}

test('id', () => {
    expect(new Mock().id.toString()).toMatch(/\d+/);
});

test('id unique', () => {
    expect(new Mock().id).not.toEqual(new Mock().id);
});

describe('marshall', () => {
    test('simple', () => {
        const refs = {};
        const object = new Mock().marshal(refs);

        expect(refs[object.id]).toEqual(object);
    });

    test('null', () => {
        expect(new Related().marshal({}).property).toBeNull();
    });

    test('property', () => {
        const obj = new Related();
        obj.property = 'testing';

        expect(obj.marshal({}).property).toEqual(obj.property);
    });

    test('circular', () => {
        const obj1 = new Related(),
            obj2 = new Related();
        obj1.related = obj2;
        obj2.related = obj1;
        const refs = {};

        const object = obj1.marshal(refs);
        expect(object).toEqual({
            '__class__': 'Related',
            'id': obj1.id,
            'related': {'__ref__': obj2.id},
            'property': null,
        });
        expect(refs[obj1.id]).toEqual({
            '__class__': 'Related',
            'id': obj1.id,
            'related': {'__ref__': obj2.id},
            'property': null,
        });
        expect(refs[obj2.id]).toEqual({
            '__class__': 'Related',
            'id': obj2.id,
            'related': {'__ref__': obj1.id},
            'property': null,
        });
    });

    test('multiple circular', () => {
        const obj1 = new Related(),
            obj2 = new Related();
        obj1.related = [obj2];
        obj2.related = [obj1];
        const refs = {};

        const object = obj1.marshal(refs);

        expect(object).toEqual({
            '__class__': 'Related',
            'id': obj1.id,
            'related': [
                {'__ref__': obj2.id},
            ],
            'property': null,
        });
        expect(refs[obj1.id]).toEqual({
            '__class__': 'Related',
            'id': obj1.id,
            'related': [
                {'__ref__': obj2.id},
            ],
            'property': null,
        });
        expect(refs[obj2.id]).toEqual({
            '__class__': 'Related',
            'id': obj2.id,
            'related': [
                {'__ref__': obj1.id},
            ],
            'property': null,
        });
    });

    test('json of marshal', () => {
        const obj1 = new Related(),
            obj2 = new Related();
        obj1.related = [obj2];
        obj2.related = [obj1];
        const refs = {};


        expect(() => {JSON.stringify(obj1.marshal(refs))}).not.toThrow();
        expect(() => {JSON.stringify(refs)}).not.toThrow();
    });
});

describe('unmarshal', () => {
    test('simple', () => {
        const ref = {
            '__class__': 'Mock',
            'id': -1,
        };
        const object = Mock.unmarshal(ref, {'-1': ref});
        expect(object).toBeInstanceOf(Mock);
        expect(object.id).not.toEqual(-1);
    });

    test('null', () => {
        const ref = {
            '__class__': 'Related',
            'id': -1,
            'property': null,
        };
        const object = Related.unmarshal(ref, {'-1': ref});
        expect(object).toBeInstanceOf(Related);
        expect(object.property).toBeNull();
    });

    test('property', () => {
        const ref = {
            '__class__': 'Related',
            'id': -1,
            'property': 'testing',
        };
        const object = Related.unmarshal(ref, {'-1': ref});

        expect(object).toBeInstanceOf(Related);
        expect(object.property).toEqual('testing');
    });

    test('circular', () => {
        const refs = {
            '-1': {
                '__class__': 'Related',
                'id': -1,
                'related': {'__ref__': -2},
                'property': null,
            },
            '-2': {
                '__class__': 'Related',
                'id': -2,
                'related': {'__ref__': -1},
                'property': null,
            },
        }
        const object = Related.unmarshal(refs[-1], refs);
        expect(object).toBeInstanceOf(Related);
        expect(object.related).toBeInstanceOf(Related);
        expect(object.related.related).toEqual(object);
        expect(object.id).not.toEqual(object.related.id);
    });

    test('multiple circular', () => {
        const refs = {
            '-1': {
                '__class__': 'Related',
                'id': -1,
                'related': [{'__ref__': -2}],
                'property': null,
            },
            '-2': {
                '__class__': 'Related',
                'id': -2,
                'related': [{'__ref__': -1}],
                'property': null,
            },
        }
        const object = Related.unmarshal(refs[-1], refs);
        expect(object).toBeInstanceOf(Related);
        expect(object.related[0]).toBeInstanceOf(Related);
        expect(object.related[0].related[0]).toEqual(object);
        expect(object.id).not.toEqual(object.related[0].id);
    });
});

describe('full circle', () => {
    const obj1 = new Related(),
    obj2 = new Related();
    obj1.related = obj2;
    obj1.property = 'testing1';
    obj2.related = obj1;
    obj2.property = 'testing2';
    const refs = {};

    const persisted = JSON.parse(JSON.stringify(obj1.marshal(refs)));
    const persistedRefs = JSON.parse(JSON.stringify(refs));
    const persistedObj = Related.unmarshal(persisted, persistedRefs);

    expect(persistedObj).toBeInstanceOf(Related);
    expect(persistedObj.related).toBeInstanceOf(Related);
    expect(persistedObj.property).toEqual(obj1.property);
    expect(persistedObj.related.property).toEqual(obj2.property);
    expect(persistedObj.related.related).toEqual(persistedObj);
});