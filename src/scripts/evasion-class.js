console.log("hello FoundryVTT!");

Hooks.on("init", () => {
    console.log("Foundry initializes , I can start my setup!");
});

Hooks.on("ready", () => {
    console.log("Foundry is ready, I can start!");
});
