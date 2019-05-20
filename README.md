# BasicStopwatch

BasicStopwatch is built using node. It's a basic stopwatch - you can start /
stop / restart / pause and check how much time has elapsed with custom output

Install using:

```
npm install basic-stopwatch
```

Simple usage :

```js
var  BasicStopWatch  =  require("basic-stopwatch") ;
bStopWatch  =  new  basicStopWatch();
bStopWatch.start();
setTimeout(()=>{
	console.log(bStopWatch.getElapsed());
},500);
```

## Usage
### Instantiate
This is a constructor function. You MUST call it with the new keyword:

```js
var bStopWatch = new BasicStopWatch();
```
You can also pass a custon output function on the cosntructor:
```js
var bStopWatch  =  new  BasicStopWatch({outputFunc:(time)=>{
	//time is HH:MM:SS.mmm
	return  time.slice(0,11);
}});
```

### BasicStopWatch.start()
Starts the stopwatch.

### Stopwatch.getElapsed()
The time elapsed parsed by custom function or default ``HH:MM:SS.mmm`` format

### BasicStopWatch.pause()
Pause the stopwatch. can be called how many times you need

### BasicStopWatch.stop()
Stops the stopwatch, if start called after, it will starts from 0

### BasicStopWatch.restart()
Clears current start time and restarts the stopwatch, you must call start with ``true`` as parameter 
```js
bStopWatch.start( true );
```

### BasicStopWatch.getStopedAt()
The time the stopwatch was stopped (in date object).

### BasicStopWatch.getStartedAt()
The time the stopwatch was started (in date object).

### Stopwatch.isRunning()
Returns ``boolean`` if is running;