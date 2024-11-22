// useState
export function useState(initialState) {
    let state = initialState;
    
    const setState = (newState) => {
      state = newState;
    };
    
    return [() => state, setState];
}



// useEffect
export function useEffect(callback, dependencies) {
    setInterval(
        () => {
            if (dependencies.length === 0) {
                return callback();
            }
        
            let prevDeps = useEffect.prevDeps || [];
        
            if (dependencies !== prevDeps) {
                return callback();
                useEffect.prevDeps = dependencies;
            }
        }, 99
    )
}

// render
export function render(callback) {
    setInterval(callback, 10);
}
