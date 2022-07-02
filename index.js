// ДАНО: Есть дерево, состоящее из двух типов узлов:
// 1. УЗЕЛ: содержит две ветки { left: УЗЕЛ/ЛИСТ, right: УЗЕЛ/ЛИСТ }
// 2. ЛИСТ: представляет собой строку
// ТРЕБУЕТСЯ: Обойти дерево и вывести для каждого ЛИСТа следующую информацию:
// <путь>: <3 самых длинных слова из строки>

// ПРИМЕР ДАННЫХ
var tree = {
    left: {
        left: "Первое предложение из произвольной строки",
        right: {
            left: "Другое произвольное предложение",
            right: "Еще одно следующее предложение, но не очень длинное"
        }
    },
    right: {
        left: {
            left: {
                left: "Еще одно не очень длинное предложение",
                right: ""
            },
            right: {
                left: "",
                right: "Еще одно не очень длинное предложение"
            }
        },
        right: {
            left: {
                left: "Предложение",
                right: "Еще одно следующее предложение, но не очень длинное"
            },
            right: {
                left: "Другое произвольное предложение",
                right: {
                    left: "Два слова",
                    right: "Еще одно следующее предложение, но не очень длинное"
                }
            }
        }
    }
};

// ЗДЕСЬ НАПИСАТЬ КОД. РЕЗУЛЬТАТ ВЫВЕСТИ ЧЕРЕЗ console.log

function findLongestWords(str) {
    let words = str.replace(/[,]+/g, " ").toLowerCase().split(" ").sort(function(a, b) {
        return b.length - a.length;
    });
    let result = words.slice(0, 3);
    return result;
};

function searchTree(obj, path) {
    if (typeof obj !== "string") {
        if (typeof path === "undefined") {
            path = "";
        }
        if (path !== "") {
            path = path + " - ";
        }
        searchTree(obj.left, path + "left");
        searchTree(obj.right, path + "right");
    } else if (typeof obj === "string") {
        console.log("<" + path + ">: <" + findLongestWords(obj) + ">");
    }
};
searchTree(tree);