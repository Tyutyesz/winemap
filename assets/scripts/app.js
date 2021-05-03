const Core = {
    init() {
        const $countryListItem = document.querySelectorAll("[data-country]");
        const $countryList = document.querySelectorAll(".list li p");
        const regionList = [];
        let regionObj = {
            countryID: '',
            regions: [

            ]
        }
        let listItem;
        $countryListItem.forEach((element) => {
            regionObj.countryID = element.getAttribute("data-country");
            listItem = element.querySelectorAll('li');
            listItem.forEach((item) => {
                regionObj.regions.push(item.getAttribute('data-region'));
            });
            regionList.push(regionObj);
            regionObj = {
                countryID: '',
                regions: [

                ]
            };
        })
        console.log(regionList);
        const hoverOnCountry = (item) => {
            console.log(item);
        }
        $countryListItem.forEach((element) => {
            element.addEventListener('mouseover', () => {
                hoverOnCountry(element)
            });
        })

    },
};

document.addEventListener('load', Core.init());
