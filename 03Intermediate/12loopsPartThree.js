const websites = ["Netflix", "Youtube", "Amazon", "Instagram", "facebook"];

for (let i of websites){   // forof loop is majorly for the Arrays.
    console.log(i)
}

const symbols = {
    yt : "Youtube",
    ig : "Instagram",
    fb : "Facebook",
    lco : "LearnCodeOnline"
}

for (const i in symbols){          // forin loop is majorly for the Objects.
    console.log(`key: ${i}value: ${symbols[i]}.`);
}