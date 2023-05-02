/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(employee) {
  let emp = {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: [],
  };

  return emp;
}

function createEmployeeRecords(employee) {
  let employees = employee.map((e) => createEmployeeRecord(e));

  return employees;
}

function createTimeInEvent(dateStam) {
  let [date, hour] = dateStam.split(" ");

  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  });

  return this;
}

function createTimeOutEvent(dateStam) {
  let [date, hour] = dateStam.split(" ");

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
  });

  return this;
}

function hoursWorkedOnDate(date) {
  const inEvents = this.timeInEvents.find((e) => {
    return e.date === date;
  });

  const outEvents = this.timeOutEvents.find((e) => {
    return e.date === date;
  });

  return (outEvents.hour - inEvents.hour) / 100;
}

function wagesEarnedOnDate(date) {
  const wages = hoursWorkedOnDate.call(this, date) * this.payPerHour;
  return parseFloat(wages.toString());
}

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

function findEmployeeByFirstName(employeeRecords, firstName) {
  return employeeRecords.find((e) => {
    return e.firstName === firstName;
  });
}

function calculatePayroll(employee) {
  return employee.reduce((memo, rec) => {
    return memo + allWagesFor.call(rec);
  }, 0);
}
