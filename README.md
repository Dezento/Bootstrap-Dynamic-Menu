### Dynamic Menu
##### Automatically determines and set the `active` class to the currently active page.
---

## Demo
![Animated GIF Example](https://github.com/dvlden/repository/blob/master/demo-preview.gif)

## How to use
`$('#navbar').dynamicMenu();`

## Options
|  #  |     Option    |    Default    |  Type  |
| --- | ------------- | ------------- | ------ |
|  1  |  activeClass  |     active    | string |
|  2  |    homePage   |   index.php   | string |

1. Given string will be applied to a parent element of the anchor element. Use this class to apply any CSS styling you need.
2. Given string will be used to determine the main/home page in the navigation menu. Sometimes, people don't use "index.php", but instead use a different file name, such as "home.php" and then they tell the server which file represents the default index page.
