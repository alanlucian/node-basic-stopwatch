const mergeAdvanced = require("object-merge-advanced");

const defaultConfig = {
    outputFunc:( time )=>{
        return time;
    }
}
function BasicStopwatch( config = {} ){

    let _config = mergeAdvanced(defaultConfig,config);

    let _isRunning = false;
    let startedAt = null;
    let stopedAt = null;
    let acumulated = 0 ;
    
    var extractTime = (t)=>{
       return new Date(t).toISOString().slice(11, -1);
    }

    this.start = ( restart = false )=>{
        if( stopedAt != null ){
            restart = true ;
        }
        if( restart == true ){
            acumulated = 0;
            stopedAt = startedAt = null ;
            
        }
        if( restart == true || !_isRunning ){
            startedAt = Date.now() ;
        }
        _isRunning = true;
    }
    this.pause = ()=>{
        if( !_isRunning ){
            return false;
        }
        acumulated = acumulated + ( Date.now() - startedAt )

        _isRunning = false;
    }
    this.isRunning = ()=>{
        return _isRunning;
    }
    this.stop = ()=>{
        stopedAt = new Date();
        acumulated = acumulated + ( Date.now() - startedAt )
        _isRunning = false;
    }
    this.getElapsed = (format = null )=>{
        if( this.isRunning() ){
            return  _config.outputFunc( extractTime(( acumulated ) + ( Date.now() - startedAt ) ) );
        }
        return  _config.outputFunc(  extractTime( acumulated ) );
    }

    this.getStartedAt = ()=>{
        return new Date(startedAt);
    }
    
    this.getStopedAt = ()=>{
        return new Date(stopedAt);
    }

}


module.exports = BasicStopwatch ;