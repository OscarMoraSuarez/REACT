/* import heroes  , { owners }  from "../data/heroes"; 
 import heroes from "../data/heroes";  */

export  const getHeroById = (id) => heroes.find(heroe => heroe.id === id);
export const getHeroByIdAsync =async(id)=>{
    
    const heroe=heroes.find(heroe=>heroe.id===id);
    if(heroe){
    return heroe;

    }else{

         throw Error `no se encontro un heroe con el id`; 

    }

}
 console.log(getHeroById(3)); 

 const getHeroesByOwner = (owner) => heroes.filter(heroes => heroes.owner === owner);  

 console.log(getHeroesByOwner('DC'));  
 const getHeroesByOwner1 = () => heroes.map(heroes => heroes.owner.toLowerCase()); 
 console.log(getHeroesByOwner1());
console.log(owners);
 
