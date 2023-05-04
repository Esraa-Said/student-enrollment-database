const string1 = "01012345678";
const string2 = "0198765432e";
const string3 = "01123456789";
const pattern = /^(010|012|015|011)\d{8}$/;

if (pattern.test(string1)) {
    console.log(`${string1} is valid`);
} else {
    console.log(`${string1} is invalid`);
}

if (pattern.test(string2)) {
    console.log(`${string2} is valid`);
} else {
    console.log(`${string2} is invalid`);
}

if (pattern.test(string3)) {
    console.log(`${string3} is valid`);
} else {
    console.log(`${string3} is invalid`);
}
