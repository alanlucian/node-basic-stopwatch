var basicStopWatch = require('../src/index') ;

bStopWatch  = new basicStopWatch({outputFunc:(time)=>{
  //time is HH:MM:SS.mmm
  return time.slice(0,11);
}});
bStopWatch.start();

var panelLog = require('panel-log') ;
    panelLog.appName = "Basic Example";
    panelLog.appVersion = "0.0.1";
    panelLog.setPercentComplete(1);
    panelLog.start() ;



    panelLog.onUpdate.add(()=>{
      
      var width = 200 ;
      var line = new panelLog.Line()
        .padding(2)
        .column("Press \"ctrl+c\" to quit this example", width)
        .fill()
        .output();

        line2 = new panelLog.Line()
        .padding(8)
        .column("\"p\" to toggle stopwatch pause/resume",width)
        .fill()
        .output();

        line2 = new panelLog.Line()
        .padding(8)
        .column("\"r\" to restart the stopwatch",width)
        .fill()
        .output();

        console.log(Array(94).fill('-').join(''));

        console.log(" Current Time in MS \t", bStopWatch.getElapsed()  ) ;
        console.log(' Is Running:', bStopWatch.isRunning());
                
    });

/*
    setTimeout(bStopWatch.pause, 1000);
    setTimeout(bStopWatch.start, 5000);*/


const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if(key.name === 'p'){
    if( bStopWatch.isRunning() ){
      bStopWatch.pause();
      return;
    }
    bStopWatch.start();
    return;
  }

  if(key.name === 'r'){
    bStopWatch.start( true );
  }
  if(key.name === 's'){
    bStopWatch.stop( );
  }

  if (key.ctrl && key.name === 'c') {
    process.exit();
  }
});
