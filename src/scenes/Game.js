import { Scene } from 'phaser';

export class Game extends Scene {
    constructor() {
        super('Game');
    }

    create() {
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
            let text1 = this.add.text(512, 584, 'Bienvenido a phaser', {
                fontSize: 38, color: '#ffffff',
                stroke: '#000000', strokeThickness: 8,
                align: 'center'
            }).setOrigin(0.5);
            this.input.once('pointerdown', () => {
                text1.destroy()
                text1 = this.add.text(512, 584, 'Vamos a comenzar con lo básico de \nphaser para esta prctica', {
                    fontSize: 38, color: '#ffffff',
                    stroke: '#000000', strokeThickness: 8,
                    align: 'center'
                }).setOrigin(0.5);
                this.input.once('pointerdown', () => {
                    text1.destroy()
                    text1 = this.add.text(512, 584, 'Para ello, se ha hecho esta pequeña \nanimación para la actividad', {
                        fontSize: 38, color: '#ffffff',
                        stroke: '#000000', strokeThickness: 8,
                        align: 'center'
                    }).setOrigin(0.5);
                    this.input.once('pointerdown', () => {
                        text1.destroy()
                        text1 = this.add.text(512, 584, 'Una vez concluido este diálogo, \nel juego se acabará.\nNos vemos en próximas activiadades ', {
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
        })


    }
}
