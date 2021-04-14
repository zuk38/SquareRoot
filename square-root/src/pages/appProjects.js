import { Container } from './Modal/container.js'; 
 

 /*MODAL POPUP*/
/*!! Submit values are NOT stored in DB*/
const Modul = () => {
    const triggerText = 'Open Form';
      const onSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.name.value);
        console.log(event.target.description.value);
        console.log(event.target.adress.value);
        console.log(event.target.zipcode.value);
        };

  return (
    <div className="Modul">
      <Container triggerText={triggerText} onSubmit={onSubmit} />
     </div>
  );
};

export default Modul;