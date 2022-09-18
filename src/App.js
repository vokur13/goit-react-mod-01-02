import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './json/paintings.json';
import Alert from './components/workbook/Alert';

// export default function App() {
//   return (
//     <div>
//       {/* <Section title="Top of the week">
//         <PaintingList items={paintings} />
//       </Section>
//       <Section title="The best of">
//         <PaintingList items={paintings} />
//       </Section> */}
//     </div>
//   );
// }

const App = () => {
  return (
    <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </>
  );
};

export default App;
