import { Scene } from 'phaser';

export class Game extends Scene {


    constructor() {
        super('Game');
    }

    async create() {
        
        let bicis = await getBicis("https://a24expressgen.onrender.com/api/bicicletas")
        console.log(bicis);
        let bici = bicis.bicicletas[0]

        this.cameras.main.setBackgroundColor(0x00ff00);

        this.add.image(512, 384, 'background').setAlpha(0.5);
        // this.add.image(512, 600, 'bwipo')

        let start = this.add.text(512, 384, 'Clic para comenzar', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {
            start.destroy()
            this.add.image(500, 400, 'bwipo').setOrigin(0.5);
            this.add.text(300, 200, '*Clic para continuar*',)
            let text1 = this.add.text(512, 584, 'Bienvenido a phaser.', {
                fontSize: 38, color: '#ffffff',
                stroke: '#000000', strokeThickness: 8,
                align: 'center'
            }).setOrigin(0.5);
            this.input.once('pointerdown', () => {
                text1.destroy()
                text1 = this.add.text(512, 584, 'Vamos a comenzar con lo básico de \nphaser para esta prctica.', {
                    fontSize: 38, color: '#ffffff',
                    stroke: '#000000', strokeThickness: 8,
                    align: 'center'
                }).setOrigin(0.5);
                this.input.once('pointerdown', () => {
                    text1.destroy()
                    text1 = this.add.text(512, 584, 'Para ello, se ha hecho esta pequeña \nanimación para la actividad.', {
                        fontSize: 38, color: '#ffffff',
                        stroke: '#000000', strokeThickness: 8,
                        align: 'center'
                    }).setOrigin(0.5);
                    this.input.once('pointerdown', () => {
                        text1.destroy()
                        text1 = this.add.text(512, 584, 'Una vez concluido este diálogo, \nel juego se acabará.\nNos vemos en próximas activiadades. ', {
                            fontSize: 38, color: '#ffffff',
                            stroke: '#000000', strokeThickness: 8,
                            align: 'center'
                        }).setOrigin(0.5);
                        this.input.once('pointerdown', () => {
                            text1.destroy()
                            text1 = this.add.text(512, 584, `Bueno, me olvidaba de la bicicleta.\nAquí te va:\nColor:${bici.color}\nModelo:${bici.modelo}\nUbicacion:${bici.ubicacion}`, {
                                fontSize: 38, color: '#ffffff',
                                stroke: '#000000', strokeThickness: 8,
                                align: 'center'
                            }).setOrigin(0.5);
                            this.input.once('pointerdown', () => {
                                this.scene.start('GameOver');
                            });
                        });
                    });
                });

            });
        })


    }
}

async function getBicis(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}