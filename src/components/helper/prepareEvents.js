

export const prepareEvents = (events = []) =>{
    return events.map(
        (e) =>({
            ...e,
        })
    );
}