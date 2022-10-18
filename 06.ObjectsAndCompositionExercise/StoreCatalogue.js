function storeCatalogue(array) {
    const groups = [];

    for (value of array) {
        let split = value.split(' : ');
        let productName = split[0];
        let productPrice = Number(split[1]);
        let groupName = productName.charAt(0).toUpperCase();

        if (groups.some(a => a.name == groupName)) {
            groups.find(a => a.name == groupName).addToGroup(productName, productPrice);
        } else {
            groups.push({
                name: groupName,
                catalogue: [{ productName, productPrice }],
                addToGroup(productName, productPrice) {
                    this.catalogue.push({
                        productName,
                        productPrice
                    })
                }
            })
        }
    }

    groups.sort((a, b) => a.name.localeCompare(b.name));
    groups.forEach(a => {
        console.log(a.name);
        a.catalogue.sort((a, b) => a.productName.localeCompare(b.productName));
        a.catalogue.forEach(b => {
            console.log(`  ${b.productName}: ${b.productPrice}`)
        });
    })
}