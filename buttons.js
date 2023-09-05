function copyToClipboard() {
    const perlfuckCode = document.getElementById("perlfuckCode");
    perlfuckCode.select();
    document.execCommand("copy");
    perlfuckCode.setSelectionRange(0,0);
}

function downloadFile() {
    const perlfuckCode = document.getElementById("perlfuckCode").value;
    const blob = new Blob([perlfuckCode], {type: "text/plain" });
    const temporaryLink = document.createElement("a");
    temporaryLink.href = URL.createObjectURL(blob);
    temporaryLink.download = "output.pl";
    temporaryLink.click();
    URL.revokeObjectURL(temporaryLink.href);
}
