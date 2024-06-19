export class Global {
    private static instance: Global;
    private value: string = "";

    private constructor() 
    {
        this.value = "";
    }

    public static GetInstance(): Global {
        if (!Global.instance) {
            Global.instance = new Global();
        }

        return Global.instance;
    }

    public SetValue(data: string): void 
    {
        this.value = data;
        window.alert("Data to fetch : " + this.value);
    }

    public GetValue(): string 
    {
        return this.value;
        window.alert("Data fetched : " + this.value);
    }
}
