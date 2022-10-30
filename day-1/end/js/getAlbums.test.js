// const getFirstAlbumTitle = require("./getAlbums");
//
// it("returns the title of the first album", async () => {
//     const title = await getFirstAlbumTitle(); // Run the function
//     expect(title).toEqual("quidem molestiae enim"); // Make an assertion on the result
// });

// Here's our initial mock-less test for this function.
// This verifies the function actually returns the title of the first album in the list


// The test above does its job, but the test actually makes
// a network request to an API when it runs. Real API calls are prone to failure,
// even if the function is working as intended. For example,
// this test will fail if the API changes the order of the list,
// if the API is down, or if the dev machine loses connection to the internet.
// Not to mention, making these requests in a large number of tests can bring your test runs to a slow crawl.


//
// Alright, here it is. This is the big secret that would have saved me mountains of time as I was wrestling with learning mocks.
// To mock an API call in a function, you just need to do these 3 steps:
//
// 1. Import the module you want to mock into your test file.
// 2. jest.mock() the module.
// 3. Use .mockResolvedValue(<mocked response>) to mock the response.

const getFirstAlbumTitle = require("./getAlbums");
const axios = require("axios");

jest.mock("axios");

it("returns the title of the first album", async () => {
    axios.get.mockResolvedValue({
        data: [
            {
                userId: 1,
                id: 1,
                title: "My First Album",
            },
            {
                userId: 1,
                id: 2,
                title: "Album: The Sequel",
            },
        ],
    });

    const title = await getFirstAlbumTitle();
    expect(title).toEqual("My First Album");
});