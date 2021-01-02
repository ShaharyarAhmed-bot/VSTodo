import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vstodo" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand("vstodo.helloWorld", () => {
      vscode.window.showInformationMessage("Hello World from VSTodo!");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("vstodo.askQuestion", async () => {
      const answer = await vscode.window.showInformationMessage(
        "How was your day?",
        "Good",
        "Bad"
      );

	  if (answer == "Bad"){
		  vscode.window.showInformationMessage("Sorry to hear that!")
	  } else{
		  console.log(answer)
	  }


    })

  );
}

export function deactivate() {}
