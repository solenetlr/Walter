import React from 'react'
import "./Timer.css"
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: this.props.seconds, pause:true};
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.breakTimer = this.breakTimer.bind(this)
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds 
    
    };
    return obj;
  }
// On met en argument les secondes dans le timeLeftVar
  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

    //Mise en place du démarrage du compteur en secondes
  startTimer() {
    if (this.state.pause && this.state.seconds>0) {
    this.setState({pause:false})

  
      this.timer = setInterval(this.countDown, 1000);
    }
  }

 breakTimer() {
   if (!this.state.pause) {
     this.setState({pause:true})
  clearInterval(this.timer)
   }
 }


  countDown() {
    // Retrait d'une seconde avec le set state
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });



    // Le compteur reste à 0.
    if (seconds === 0) { 
      clearInterval(this.timer);
    }
  }
 
  render() {
    return(
      //Ternaire afin de transformer les couleurs du rectangle + Bouton + Application du "0" devant les chiffres
      <span className={this.state.time.s>=20? "bleu" :
                  this.state.time.s >=12 && this.state.time.s < 20? "orange": "rouge"}>
        <button onClick={this.startTimer}> Démarrer </button> 
        <button onClick={this.breakTimer}> Pause </button> 
        <p> {this.state.time.s < 10 ? "0" + this.state.time.s : this.state.time.s } </p>
         </span>
    
   
       
    );
  }
}

  export default Timer; 