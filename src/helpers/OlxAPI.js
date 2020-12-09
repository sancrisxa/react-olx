const OlxAPI = {

    getProducts: (limit = 10) => {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
               
                const array = [
                    {title: 'Produto 1', id: 1},
                    {title: 'Produto 2', id: 2},
                    {title: 'Produto 3', id: 3}
                ];
               
                resolve(array); 
            }, 2000)
        });
    }
};


export default OlxAPI;