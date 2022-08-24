////////////////////////////////////////////////////////////
// queviva - MCMLXXXVIII 
//
// defatul app
////////////////////////////////////////////////////////////

Date.now() < new Date('2023-10-13') &&

((
  P = Object.assign(
    {
      selector: 'viva'
    },
    JSON.parse(Object.values(
      document.currentScript.dataset
    )[0]||'{}')
  ),
  
  R = P.selector
  
 ) => document.addEventListener('DOMContentLoaded',

() => document.dispatchEvent(new CustomEvent(
  
  (R + '-load'), {detail: new Proxy(
    new function(){
      document.querySelectorAll(
        `[data-${R}]:not(script)`
      ).forEach((obj,i)=>obj.dispatchEvent(
        new CustomEvent(
          R + '-load',
          {detail : (this[i] = new Proxy(
            new function(
              A = false,
              Z = {
                  
                  wheel : e => {
                      e.stopPropagation();
                      e.preventDefault();
                      console.log(obj.id,e.wheelDeltaY);
                  },
                  
                  touchmove : e => {
                      e.stopPropagation();
                      e.preventDefault();
                      console.log(obj.id,'touch');
                  },
                  
                  grind : e => {},
                  
                  ['set-'+R] : e => {
                      console.log('set to', e.detail);
                  },
                  
                  ['tog-'+R] : (e,b=(A=!A)) => {
                    console.log('turnin',b?'on':'off');
                    for(let z in Z){
                      (!e || !z.match(/-/)) ?
                        obj[(
                            b?'add':'remove')+
                            'EventListener'
                        ](z,Z[z],{passive:false}):''
                      }
                  }
                  
              }
                
            ){
                this.obj = obj;
                Z['tog-'+R]();
            }(),
            {get(t,p){return t[p]},set(t,p){return 0}}
          ))}
        )
      ))
    }(),

    {get(t,p){return t[p];},set(t,p){return 0;}}
  
  )}

))))() === undefined || console.log('eXp!red');
  
    
//prefs = Object.assign({},P,JSON.parse(obj.dataset[R]||'{}')),
    
    
