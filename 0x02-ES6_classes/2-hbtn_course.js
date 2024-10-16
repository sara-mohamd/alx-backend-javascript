export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string')
      this._name = name;
    else
      throw TypeError('Name must be a string');

    if (typeof length === 'number')
      this._length = length;
    else
      throw TypeError('Length must be a number');

    if (Array.isArray(students))
      this._students = students;
    else
      throw TypeError('Students must be an array');
  }

  // name's accessor and Mutator
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string')
      this._name = newName;
    else
      throw TypeError('Name must be a string');
  }

  // length's accessor and Mutator
  get length() {
    return this_length;
  }

  set length(newLength) {
    if (typeof length === 'number')
      this._length = length;
    else
      throw TypeError('Length must be a number');
  }

  // students'accessor and Mutator
  get students() {
    return this_students;
  }

  set students(newStudents) {
    if (Array.isArray(students))
      this._students = students;
    else
      throw TypeError('Students must be an array');
  }
}
