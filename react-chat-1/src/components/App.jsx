// import React from 'react';
// import { HeaderBar } from './HeaderBar';
// import { ChannelList } from './ChannelList';
// import { ChatPane } from './ChatPane';

// export default function App(props) {
//   return (
//     <div>Hello App</div>
//   );
// }


// // // Example Slide 7 (Properties (props))

// function Greeting({name, language}) {
//   // console.log("props:", props);
// //  const {name, language} = props;

//   return (  
//     <section>
//       <h2>Hello, {name}!</h2>
//       <p>Your favorite language is {language}.</p>
//     </section>
//   );
// }

// export default function App() {
//   return (
//     <main>
//       <h1>Props Example</h1>

//      <Greeting name="Maya" language="JavaScript" schoolStanding="Junior" timsattribute="value" />
//      <Greeting name="Diego" language="Python" schoolStanding="Senior" />
//      <Greeting name="Ava" language="Java" schoolStanding="Sophomore" />
//     </main>
//   );
// }

// // Example Slide 7a (Destructuring props)

// function Greeting({ name, language }) {
//   console.log("props:", { name, language });
//   return (
//     <section>
//       <h2>Hello, {name}!</h2>
//       <p>Your favorite language is {language}.</p>
//     </section>
//   );
// }

// // // Example Slide 7b (composition using maps)
// const students = [
//   { name: "Maya", language: "JavaScript" },
//   { name: "Diego", language: "Python" },
//   { name: "Ava", language: "Java" }
// ];

// function Greeting({ name, language }) {
//   return (
//     <section>
//       <h2>Hello, {name}!</h2>
//       <p>Your favorite language is {language}.</p>
//     </section>
//   );
// }

// export default function App() {

//   // transform data into an array of React elements
//   const greetingElements = students.map((student) => {
//     return (
//       <Greeting
//         name={student.name}
//         language={student.language}
//         key={student.name}
//       />
//     );
//   });

//   return (
//     <main>
//       <h1>Props + Map Example</h1>

//       {/* render the array of elements */}
//       {greetingElements}
//     </main>
//   );
// }

// export default function App() {
//   return (
//     <main>
//       <h1>Props Example</h1>

//       <Greeting name="Maya" language="JavaScript" schoolStanding="Junior" />
//       <Greeting name="Diego" language="Python" schoolStanding="Senior" />
//       <Greeting name="Ava" language="Java" schoolStanding="Sophomore" />
//     </main>
//   );
// }

import React from 'react';
import { HeaderBar } from './HeaderBar';
import { ChannelList } from './ChannelList';
import { ChatPane } from './ChatPane';

// // Example Slide 14

// export default function App(props) {
//   return (
//     <div>
//       <HeaderBar />
//     </div>
//   );
// }

// // Example Slide 15
// export default function App(props) {
//   return (
//     <div>
//       <HeaderBar />
//       <ChannelList />
//     </div>
//   );
// }
// // Example Slide 17
// export default function App(props) {
//   return (
//     <div>
//       <HeaderBar />
//       <ChannelList />
//       <ChatPane/>
//     </div>
//   );
// }

// Example Slide 24

export default function App(props) {

  return (
    <div>

      <HeaderBar />
      <div className='row'>
        <div className='col-4'>
          <ChannelList />
        </div>
        <main className='col'>
          <ChatPane />
        </main>
      </div>
    </div>
  )
};


// // Example Slide 28 
// export default function App(props) {
//   const currentChannel = 'general';

//   return (
//     <div className='d-flex flex-column'>

//       <HeaderBar />
//       <div className='row flex-grow-1'>
//         <div className='col-2'>
//           <ChannelList currentChannel={currentChannel} />
//         </div>
//         <div className='col-6'>
//           <ChatPane currentChannel={currentChannel}/>
//         </div>
//       </div>
//     </div>
//   )
// };

