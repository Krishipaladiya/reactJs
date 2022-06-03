import logo from './logo.svg';
import './App.css';

function App() {


  const person = {
    name: "Amit",
    age: 25
  }

  //Object 1
  let itemList = [];
  let propList = [];
  for (var property in person) {
    itemList.push(<th>{property}</th>)
    propList.push(<td>{person[property]}</td>)
  }

  const person2 = [
    {
      name: "Amit",
      age: 25,
    },
    {
      name: "Piyush",
      age: 40,
    },


  ];

  let itemList2 = [];
  let propList2 = [];
  person2.map((x) => {
    for (var property in x) {
      itemList2.push(<th>{property}</th>)
      propList2.push(<td>{x[property]}</td>)
    }
  })

  let itemList3 = [];
  let propList3 = [];
  const person3 = {
    name: "Amit",
    age: 25,
    course: [
      "C",
      "HTML"
    ]
  }

  for (let a in person3) {
    itemList3.push(<th>{a}</th>)
    if (a === "course") {
      person3.course.map((x) => {
        propList3.push(<td>{x}</td>)
      })
    }
    else {
      propList3.push(<td>{person3[a]}</td>)
    }
  }

  const person4 = [
    {
      name: "Amit",
      age: 25,
      course: [
        "C",
        "HTML"
      ]
    },
    {
      name: "Ajay",
      age: 40,
      course: [
        "Java",
        "JavaScript"
      ]
    }
  ]

  let itemList4 = [];
  let propList4 = [];
  let found = false;
  person4.map((x) => {
    if (found == false) {
      for (let a in x) {
        itemList4.push(<th>{a}</th>)
        found = true;
      }
    }
    for (let a in x) {
      if (a === "course") {
        x.course.map((x => propList4.push(<tr><td>{x}</td></tr>)))
      }
      else {
        propList4.push(<td>{x[a]}</td>)
      }
    }
  })

  const myObj = {
    name: "John",
    age: 30,
    cars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat"
    }
  }

  let itemList5 = [];
  let propList5 = [];
  for (var k in myObj) {
    itemList5.push(<th>{k}</th>)
    if (k === "cars") {
      for (let ab in myObj.cars) {
        propList5.push(<tr><td>{myObj.cars[ab]}</td></tr>);
      }
    }
    else {
      propList5.push(<td>{myObj[k]}</td>)
    }
  }

  const data = {
    personal_info: {
      name: 'amit',
      age: 25,
      city: 'surat'
    },
    courses: ["C", "JavaScript", "React"],
    branches: {
      rwl: {
        admission: 50,
        vacant_seat: 10
      },
      rw2: {
        admission: 30,
        vacant_seat: 20
      },
      rw3: {
        admission: 25,
        vacant_seat: 25
      },
      rw4: {
        admission: 40,
        vacant_seat: 10
      }
    }
  }

  let itemList6 = [];
  let propList6 = [];


  for (let y in data) {
    itemList6.push(<tr><th>{y}</th></tr>)
    for (let as in data[y]) {
      itemList6.push(<th>{as}</th>)
    }
  }

  let employeeData = [
    {
      name: "happy",
      age: 35,
      salary: 2500,
      bonus: 1000,
      status: false
    },
    {
      name: "darshil",
      age: 25,
      salary: 3000,
      bonus: 2000,
      status: true
    },
    {
      name: "krishi",
      age: 23,
      salary: 100,
      bonus: 500,
      status: true
    },
    {
      name: "naman",
      age: 29,
      salary: 2000,
      bonus: 600,
      status: true
    },
    {
      name: "ram",
      age: 33,
      salary: 2500,
      bonus: 2000,
      status: true
    },
  ]

  //filter use for filtering in the data
  let empData = employeeData.filter(v => v.status === true);
  //reduce a=>store all amount, c=>starting 
  let totalPrice = empData.reduce((a, c) => a + c.salary + c.bonus, 0);


  let medicineData = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];


  let mediData = medicineData.filter(v => v.status === true && v.expiry >= 2022);
  let totalPrice2 = mediData.reduce((a, c) => a + c.price, 0);

  return (
    <table border="1" cellPadding="10px 20px">
      <thead>
        <tr>
          <th >ID</th>
          <th >Name</th>
          <th >Quantity</th>
          <th >price</th>
          <th >Expiry</th>
          <th >Status</th>
          <th >Total Price</th>
        </tr>
      </thead>
      <tbody>
        {
          mediData.map((v, i) => {
            return (
              <tr key={i}>
                <th >{v.id}</th>
                <td>{v.name}</td>
                <td>{v.quantity}</td>
                <td>{v.price}</td>
                <td>{v.expiry}</td>
                <td>{v.status.toString()}</td>
                {
                  i === 0 ? <td className='align-middle' rowSpan={mediData.length}>{totalPrice2}</td> : null
                }
              </tr>
            )
          })
        }
      </tbody>
      <br></br>

      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Salary</th>
          <th scope="col">Bonus</th>
          <th scope="col">Total Salary</th>
          <th scope="col">Status</th>
          <th scope="col">Total Expenses</th>
        </tr>
      </thead>
      <tbody>
        {
          empData.map((v, i) => {
            return (
              <tr key={i}>
                <th >{v.name}</th>
                <td>{v.age}</td>
                <td>{v.salary}</td>
                <td>{v.bonus}</td>
                <td>{v.salary + v.bonus}</td>
                <td>{v.status.toString()}</td>
                {
                  i === 0 ? <td className='align-middle' rowSpan={empData.length}>{totalPrice}</td> : null
                }
              </tr>
            )
          })
        }
      </tbody>


      <br>
      </br>
      <tr>
        {itemList}
      </tr>
      <tr>
        {propList}
      </tr>

      <br />

      <tr>
        {itemList2}
      </tr>
      <tr>
        {propList2}
      </tr>

      <br />

      <tr>
        {itemList3}
      </tr>
      <tr>
        {propList3}
      </tr>

      <br />

      <tr>
        {itemList4}
      </tr>
      <tr>
        {propList4}
      </tr>
      <br />

      <tr>
        {itemList5}
      </tr>
      <tr>
        {propList5}
      </tr>

      <br />

      <tr>
        {itemList6}
      </tr>
      <tr>
        {propList6}
      </tr>
    </table>
  );

}

export default App;
