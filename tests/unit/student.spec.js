import Student from '@/models/student';

test('constructor', () => {
    const obj = new Student();
    expect(obj).not.toBeNull();
});

test('unique id', () => {
    expect(new Student().id).not.toEqual(new Student().id);
});

test('name', () => {
    const name = 'Someone';
    const obj = new Student();
    obj.name = name;

    expect(obj.name).toEqual(name);
});