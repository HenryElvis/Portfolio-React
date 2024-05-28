let DataToFetch: string = "";

export function SetData(data: string): void 
{
    DataToFetch = data;

    window.alert("Data set : " + DataToFetch);
}

export function GetData(): string {
    console.log("GetData called");
    if (!DataToFetch || DataToFetch === "") {
        console.log("Data not found");
        return "";
    }
    console.log("Data retrieved: " + DataToFetch);
    return DataToFetch;
}

