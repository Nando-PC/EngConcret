export const alvenaria = [
    {
        id: 1,
        descricao: 'Tijolo Maciço',
        dimensoes: '10,5 x 5,5 x 21,5 cm',
        rendimento: 60, //rendimento para cada m2 e para cada tipo de largura de parede = 10cm
        area: 0.011825, 
        volume: 0.280, //volume está em dm3=l para 1 unidade, 1dm= 10cm = 1cm3=0.001dm3 ou 1000l
        //rendimentoVinteUm: 120,    
        //No volume entende-se que a espessura de argamassa é 1cm.    
    },
    {
        id: 2,
        descricao: 'Tijolo 14 Furos',
        dimensoes: '11,5 x 9,0 x 19,0 cm',
        rendimento: 45, //parede=11cm
        area: 0.0171,
        volume: 0.308,
        //rendimento19cm: 70,        
    },
    {
        id: 3,
        descricao: 'Tijolo 17 Furos',
        dimensoes: '11,5 x 9,0 x 24,0 cm',
        rendimento: 35, //parede=11cm
        area: 0.0216,
        volume: 0.363,
        //rendimento24cm:  70,    
    },
    {
        id: 4,
        descricao: 'Bloco 6 Furos',
        dimensoes: '11,5 x 14,0 x 24,0 cm', 
        rendimento: 26, //parede=11cm
        area: 0.0336,
        volume: 0.418,
        //rendimento14cm: 32,       
    },
    {
        id: 5,
        descricao: 'Bloco 8 Furos',
        dimensoes: '11.5 x 19,0 x 24,0 cm',
        rendimento: 20, //parede=11cm
        area: 0.0456,
        volume: 0.473,
        //rendimento19cm: 32,        
    },
    {
        id: 6,
        descricao: 'Bloco 9 Furos',
        dimensoes: '14,0 x 19,0 x 29,0 cm',  
        rendimento: 17, //parede=14cm
        area: 0.0551,
        volume: 0.672,
        //rendimento19cm: 22,     
    },
    {
        id: 7,
        descricao: 'Bloco de Concreto',
        dimensoes: '14,0 x 19,0 x 39,0 cm',
        rendimento: 13, //parede=14cm
        area: 0.0741,
        volume: 0.812,
    },
    {
        id: 8,
        descricao: 'Bloco de Concreto 54',
        dimensoes: '14,0 x 19,0 x 54,0 cm', 
        rendimento: 10,  //parede=14cm
        area:  0.1026,
        volume: 1.022,
    }
];

