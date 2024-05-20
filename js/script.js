function nightmode(){
  var aside = document.querySelector('aside')
  var header = document.querySelector('header')
  var profileBottom = document.getElementById('profile-bottom')
  var section2 = document.getElementById('section2')
  var section3 = document.getElementById('section3')
  var quarterNum = document.getElementsByClassName('quarterNum')
  var goalP = document.getElementsByClassName('goal_p')

  array = [aside, profileBottom, header]
  
  if(this.value !== 'night')
  {
    for(i of array){
      i.style.backgroundColor = 'black'
      i.style.color = 'white'
      this.value = 'day'
    }
    section2.style.backgroundColor = 'rgba(10, 12, 12, 0.7)';
    section3.style.background = 'linear-gradient(to top, rgba(19, 23, 24, 0.5), rgba(15,15,18,0.7))';
    for(i in quarterNum){
      quarterNum[i].style.color = 'white';
      goalP[i].style.color = 'white';
    }
    
  }
  else
  {
    aside.style.backgroundColor = '#75dbcd';
    header.style.backgroundColor = '#6fd0c3';
    profileBottom.style.color = 'black';
    section2.style.backgroundColor = 'rgba(118, 211, 197, 0.5)';
    section3.style.background = 'linear-gradient(to top, rgba(138, 219, 201, 0.5), rgba(122,213,198,0.7))';
    for(i in quarterNum){
      quarterNum[i].style.color = 'black';
      goalP[i].style.color = 'black';
    }
    this.value = 'night';
  }
}