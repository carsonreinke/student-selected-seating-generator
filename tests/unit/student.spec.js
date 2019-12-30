import Student from '@/student';

test('constructor', () => {
    const obj = new Student();
    expect(obj).not.toBeNull();
});

test('name', () => {
    const name = 'Someone';
    const obj = new Student();
    obj.name = name;

    expect(obj.name).toEqual(name);
});