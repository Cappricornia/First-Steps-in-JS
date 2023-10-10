function towns(arr){
        let locationsSplit =  arr.map(item => {
            const [town, latitude, longitude] = item.split(' | ');
            return {
                town: town,
                latitude: parseFloat(latitude).toFixed(2),
                longitude: parseFloat(longitude).toFixed(2)
            };
    
        });

        for (const locationObj of locationsSplit) {
            console.log(`{ town: '${locationObj.town}', latitude: '${locationObj.latitude}', longitude: '${locationObj.longitude}' }`);
        }
}

   
const arr = ['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'];

towns(arr);

