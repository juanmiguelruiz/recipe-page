import Card from "./components/Card";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";

import "./App.css";
import photo from "./assets/img/photo1.png";

function App() {
  return (
    <div className="recipe container">
       <div className="row">
         <Card
           title="Classic Cheesecake Recipe"
           description="Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath."
           image={photo}
           yields="12 servings"
           prep_time="45 minutes"
           cook_time="1 hour"
           total_time="7,75 hours"
         />

         <Ingredients
           first_title="Graham Cracker Crust"
           second_title="Cheesecake"
         />
         <Instructions />
       </div>
       <p className="recipe__source">
         Source:<br/> https://sallysbakingaddiction.com/classic-cheesecake/{" "}
       </p>
       
       <footer className="recipe__footer">
         <p>juanmiguelruiz @ DevChallenges.io</p>
       </footer>
     </div>
  );
}

export default App;
