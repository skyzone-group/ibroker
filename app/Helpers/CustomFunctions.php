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

    function public_file_path():string
    {
        return public_path()."/files/";
    }

    function uploadBase64Image($imageBase64)
    {
        $time = getCurrentMicrotime();
        $fileName = $time.'.jpg';
        
        list($type, $imageBase64) = explode(';', $imageBase64);
        list(, $imageBase64)      = explode(',', $imageBase64);
    
        $image_data = base64_decode($imageBase64);

        $filePath = "file/". $fileName;
        file_put_contents($filePath, $image_data);

        if(file_exists("file/".$fileName))
        {
            return $fileName;
        }
        return false;
    }

?>
