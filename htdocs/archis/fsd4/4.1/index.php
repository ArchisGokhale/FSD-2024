<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            padding: 40px;
        }
    </style>
</head>

<body>
    <h1>My first PHP page</h1>
    <?php
        $txt = "Hello World";
        $x = 5;
        $y = 10.5;

        echo $txt;
        echo "<br />";
        echo $x;
        echo "<br />";
        echo $y;
        echo "<br />";

        echo "Number a: ".$x." Number b: ".$y;
        echo "<br />";
        echo "Sum: ".$x+$y;
        echo "<br />";

        function scope_test() {
            global $x, $y;
            $y = $x + $y;
            echo "Variable inside is: x: $x y: $y";
        }
        scope_test();

        echo "<br />";
        echo "y outside: $y";
    ?>

    <h1>Date functions</h1>
    <?php
        $day = date("l");
        echo "Weekday: $day";
        echo "<br />";

        if ($day == "Saturday")
            echo "Happy Weekend";
        elseif ($day == "Sunday")
            echo "Happy Sunday";
        else
            echo "Nice Working day";

        echo "<br />";
    ?>

    <h1>Switch Statement</h1>
    <?php
        $color = "red";
        switch ($color) {
            case "red":
                echo "Fav color is red";
                break;
            case "blue":
                echo "Fav color is blue";
                break;
            default:
                echo "No good color";
        }
    ?>

    <h1>Functions</h1>
    <?php
        function add($a, $b = 300) {
            $sum = $a + $b;
            return $sum;
        }

        function hello() {
            echo "Hello there";
        }

        $result = add(10);

        echo "Sum is $result <br />";

        $func = "hello";
        $func();
    ?>

    <h1>String Manipulation</h2>
    <?php
        $my_string = "A quick brown fox jumped over the lazy dog";
        echo $my_string;
        echo "<br />";
        echo "Length: ".strlen($my_string);
        echo "<br />";
        echo "Words: ".str_word_count($my_string);
        echo "<br />";
        echo "Reverse: ".strrev($my_string);
        echo "<br />";
        echo "Fox position: ".strpos($my_string, "fox");
        echo "<br />";
        echo "Replace: ".str_replace($my_string, "dog", "bush");
        echo "<br />";
    ?>

    <h1>Arrays</h1>
    <?php
        $veggies = array("carrot", "raddish", "tomato");
        $veggies_len = count($veggies);
        echo "Length: ".$veggies_len;

        echo "<br />";
        for ($x = 0; $x < $veggies_len; $x++) {
            echo $veggies[$x]." ";
        }

        $beyblade = array("Pegasus" => "Ginga", "Nemisis" => "Potato");
        
        foreach ($beyblade as $x => $tatertot) {
            echo "<br />";
            echo "Key: $x, Value: $tatertot";
        }
        echo "<br />";
        echo "<br />";

        $multi = array(array(1, 2, 3), array(4, 5, 6), array(7, 8, 9));
        echo "array(array(1, 2, 3), array(4, 5, 6), array(7, 8, 9))";

        foreach ($multi as $i) {
            echo "<br />";
            print_r($i);
        }

        $Pegasus = "tomato";

        echo "<br />";
        extract($beyblade);
        echo "<br />";
        echo $Pegasus;
        echo "<br />";
        echo $Nemisis;

        echo "<br />";
        print_r(compact("Pegasus", "Nemisis"));

        echo "<br />";
        echo "Is array Multi: ".is_array($multi);
        echo "<br />"; 
        echo "Is array Pegasus: ".is_array($Pegasus);

        echo "<br />"; 
        echo "<br />"; 
        echo "Num sort: <br />"; 
        $nums = array(7, 8, 1, 5, 8, 16, 181239);
        sort($nums);
        print_r($nums);
        rsort($nums);
        echo "<br />"; 
        print_r($nums);

        echo "<br />"; 
        echo "<br />"; 
        echo "Value wise sort: <br />"; 
        asort($beyblade);
        print_r($beyblade);
        echo "<br />"; 
        arsort($beyblade);
        print_r($beyblade);
        echo "<br />"; 
        echo "<br />"; 
        echo "Key wise sort: <br />"; 
        ksort($beyblade);
        print_r($beyblade);
        echo "<br />"; 
        krsort($beyblade);
        print_r($beyblade);
    ?>
</body>
</html>