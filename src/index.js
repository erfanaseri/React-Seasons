import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <nav>latitude: {this.state.errorMessage}</nav>;
    }

    return (
      <nav>
        <Spinner message="Please accept location request" />
      </nav>
    );
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

// const Person = function (firstName, lastName, birthYear) {
//   this.esm = firstName;
//   this.famil = lastName;
//   this.tavallod = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2021 - this.tavallod);
// };

// const erfan = new Person("Erfan", "Naseri", 1993);
// const ginny = new Person("Ginny", "Morello", 1996);
// console.log(erfan);
// console.log(ginny);
// erfan.calcAge();

// console.log(erfan.__proto__ === Person.prototype);
// console.log(erfan);

// class Student {
//   local = navigator.language;
//   constructor(firstName, lastName, birthYear) {
//     this.esm = firstName;
//     this.famil = lastName;
//     this.tavallod = birthYear;
//   }

//   calcAge() {
//     console.log(3021 - this.tavallod);
//   }
// }

// class Student1 extends Student {
//   movement = [];
//   constructor(firstName, lastName, birthYear, course) {
//     super(firstName, lastName, birthYear);
//     this.dars = course;
//   }
//   showDars() {
//     console.log(this.dars);
//   }
// }

// class Student2 extends Student1 {
//   boobs = "";
// }

// const rezvan = new Student("rezvan", "naseri", 1986);
// const ehsan = new Student1("ehsan", "naseri", 1984, "fizik");
// const erfan = new Student2("erfan", "naseri", 1993, "Riazi");
// console.log(rezvan);
// console.log(ehsan);
// console.log(erfan);

// ehsan.calcAge();
// erfan.showDars();
// ehsan.showDars();

// const time = function () {
//   console.log(new Date().toLocaleTimeString());
// };
// setInterval(time, 1000);
