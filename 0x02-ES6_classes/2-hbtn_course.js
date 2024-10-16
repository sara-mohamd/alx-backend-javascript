export default class HolbertonCourse {
  HolbertonCourse(name, length, students) {
    if (typeof name === String)
      this._name = name;
    else
      throw TypeError('Name must be a string');

    if (typeof length === Number)
      this._length = length;
    else
      throw TypeError('Length must be a number');

    if (typeof students === Array)
      this._students = students;
    else
      throw TypeError('Students must be an array');
  }
}
