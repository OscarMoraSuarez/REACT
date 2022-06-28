module.exports = {
    presets: [
                                        /* modulos de ES6 */
        ['@babel/preset-env',{targets: { esmodules:true }}],
        ['@babel/preset-react', { runtime:'automatic' } ],

    ],
};