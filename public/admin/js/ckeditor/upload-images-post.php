<?php
if ($_FILES['upload']['size'] <= 2097152) {
    if (isset($_FILES['upload']['name'])) {
        $file = $_FILES['upload']['tmp_name'];
        $file_name = $_FILES['upload']['name'];
        $file_name_array = explode(".", $file_name);
        $extenstion = end($file_name_array);
        $new_image_name = $file_name . '_' . rand() . '.' . $extenstion;
        chmod('../../../../public', 0777);
        $allow_extenstion = array("jpg", "gif", "png");
        if (in_array($extenstion, $allow_extenstion)) {
            move_uploaded_file($file, '../../../../public/images/post/desc/' . $new_image_name);
            $function_number = $_GET['CKEditorFuncNum'];
            $url = '../../../../public/images/post/desc/' . $new_image_name;
            $message = '';
            echo "<script type='text/javascript'>window.parent.CKEDITOR.tools.callFunction('$function_number', '$url', '$message')</script>";
        }
    }
} else {
    print_r('Vui lòng chọn hình ảnh nhỏ hơn hoặc bằng 2MB');
}
