<?php
    function generateNumber($size = 4){
        $chars = "0123456789";
        $length = strlen($chars);
        $code = "";
        for($i = 0; $i < $size; $i++) $code .= $chars[rand(0, $length - 1)];
        return $code;
    }

    function getCurrentMicrotime() {
        return round(microtime(true) * 1000);
    }

?>
