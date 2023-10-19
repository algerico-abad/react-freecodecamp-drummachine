import React from 'react'
import './DrumMachine.css'
import Heater1 from './assets/audio/Heater-1.mp3'
import Heater2 from './assets/audio/Heater-2.mp3'
import Heater3 from './assets/audio/Heater-3.mp3'
import Heater4 from './assets/audio/Heater-4.mp3'
import Clap from './assets/audio/Clap.mp3'
import OpenHH from './assets/audio/Open-HH.mp3'
import KickNHat from './assets/audio/Kick_n_Hat.mp3'
import Kick from './assets/audio/Kick.mp3'
import ClosedHH from './assets/audio/Closed-HH.mp3'

class DrumMachine extends React.Component {
    constructor(props) {
        super(props)
        this.PlayAudio = this.PlayAudio.bind(this)
        this.KeyPlay = this.KeyPlay.bind(this)
    }

    PlayAudio(ev) {
        const node = ev.currentTarget
        const audio = node.querySelector('audio')
        const display = document.getElementById('display')
        display.innerText = node.dataset.description
        if (audio.curretTime != 0) {
            audio.pause()
            audio.curretTime = 0
        }
        audio.play()
        console.log('playing...')
    }

    KeyPlay(ev) {
        console.log(ev)
    }

    componentDidMount() {
        document.onkeydown = (ev) => {
            if (ev.code === 'KeyQ') {
                document.querySelector('#Q').click()
            } else if (ev.code === 'KeyW') {
                document.querySelector('#W').click()
            } else if (ev.code === 'KeyE') {
                document.querySelector('#E').click()
            } else if (ev.code === 'KeyA') {
                document.querySelector('#A').click()
            } else if (ev.code === 'KeyS') {
                document.querySelector('#S').click()
            } else if (ev.code === 'KeyD') {
                document.querySelector('#D').click()
            } else if (ev.code === 'KeyZ') {
                document.querySelector('#Z').click()
            } else if (ev.code === 'KeyX') {
                document.querySelector('#X').click()
            } else if (ev.code === 'KeyC') {
                document.querySelector('#C').click()
            }
        }
    }

    render() {
        return(
            <div className='column' id='interface-main' onKeyDown={this.KeyPlay}>
                <div className='row' id='drum-machine'>
                    <div id='display'></div>
                    <div className='drum-pad' id='Q' onClick={this.PlayAudio} data-description='Heater-1'>
                        <audio className='clip' id='Q' src={Heater1}></audio>
                        Q
                    </div>
                    <div className='drum-pad' id='W' onClick={this.PlayAudio} data-description='Heater-2'>
                        <audio className='clip' id='W' src={Heater2}></audio>
                        W
                    </div>
                    <div className='drum-pad' id='E' onClick={this.PlayAudio} data-description='Heater-3'>
                        <audio className='clip' id='E' src={Heater3}></audio>
                        E
                    </div>
                    <div className='drum-pad' id='A' onClick={this.PlayAudio} data-description='Heater-4'>
                        <audio className='clip' id='A' src={Heater4}></audio>
                        A
                    </div>
                    <div className='drum-pad' id='S' onClick={this.PlayAudio} data-description='Clap'>
                        <audio className='clip'id='S' src={Clap}></audio>
                        S
                    </div>
                    <div className='drum-pad' id='D' onClick={this.PlayAudio} data-description='Open-HH'>
                        <audio className='clip' id='D' src={OpenHH}></audio>
                        D
                    </div>
                    <div className='drum-pad' id='Z' onClick={this.PlayAudio} data-description='Kick-N-Hat'>
                        <audio className='clip' id='Z' src={KickNHat}></audio>
                        Z
                    </div>
                    <div className='drum-pad' id='X' onClick={this.PlayAudio} data-description='Kick'>
                        <audio className='clip' id='X' src={Kick}></audio>
                        X
                    </div>
                    <div className='drum-pad' id='C' onClick={this.PlayAudio} data-description='Closed-HH'>
                        <audio className='clip' id='C' src={ClosedHH}></audio>
                        C
                    </div>
                </div>
            </div>
        )
    }
}

export default DrumMachine