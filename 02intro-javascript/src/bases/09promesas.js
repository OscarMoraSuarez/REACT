
/* import { getHeroById , getHeroByIdAsync } from './impExp'; */
 const promesa =new Promise((resolve,reject)=>{

   setTimeout(() => {
    // Tarea
   const heroe=getHeroById(25);
   (heroe)?resolve(heroe):reject(`no se encontro ningun registro con ese numero`);
   }, 2000);
        
    

});

promesa.then(
 (heroe)=>{
    console.table(heroe);
 }
).catch((err)=>{
    console.error(err);
}).finally(console.log('fin pormesa')); 



 const seekHero=(id)=>{

const heroe=getHeroById(id);
    return new Promise((resolve, reject) => {
        if(heroe){
            resolve(heroe);
        }else{
            reject(`no hay un heroe relacionado con ese id:${id}`);
        }
    })    
}
seekHero(0).then(
    (heroe) => {
        console.table(heroe);
    }
    ).catch((err) => {
        console.error(err);
    }).finally(console.log('fin pormesa')); 


const seekHeroeAsync = async (id) => {
    const heroe = getHeroByIdAsync(id);
    if (!!heroe) {
        return await getHeroByIdAsync(id);;
    } else {
       throw Error;
    }

}

seekHeroeAsync(20).then(console.log).catch(err => {
    console.log(err);
});





