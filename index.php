<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Document</title>
</head>
<body>
    <div class="coursess">
        <div class="coursess_item" data-course="1">Курси 1
            <ul class="sub-items">
                <li class="sub-item speciality" data-specialty="Web">Веб-дизайн</li>
                <li class="sub-item speciality" data-specialty="Graphic">Дизайни графики</li>
                <li class="sub-item speciality" data-specialty="SP1">Дизайни робитави</li>
                <li class="sub-item speciality" data-specialty="SP2">Дизайни кастюм ва газвор</li>
                <li class="sub-item speciality" data-specialty="SP3">Дизайни дохили бино</li>
            </ul>
        </div>
        <div class="coursess_item" data-course="2">Курси 2
            <ul class="sub-items">
                <li class="sub-item speciality">Веб-дизайн</li>
                <li class="sub-item speciality">Дизайни графики</li>
                <li class="sub-item speciality">Дизайни робитави</li>
                <li class="sub-item speciality">Дизайни кастюм ва газвор</li>
                <li class="sub-item speciality">Дизайни дохили бино</li>
            </ul>
        </div>
        <div class="coursess_item" data-course="3">Курси 3
            <ul class="sub-items">
                <li class="sub-item speciality">Веб-дизайн</li>
                <li class="sub-item speciality">Дизайни графики</li>
                <li class="sub-item speciality">Дизайни робитави</li>
                <li class="sub-item speciality">Дизайни кастюм ва газвор</li>
                <li class="sub-item speciality">Дизайни дохили бино</li>
            </ul>
        </div>
        <div class="coursess_item" data-course="4">Курси 4
            <ul class="sub-items">
                <li class="sub-item speciality">Веб-дизайн</li>
                <li class="sub-item speciality">Дизайни графики</li>
                <li class="sub-item speciality">Дизайни робитави</li>
                <li class="sub-item speciality">Дизайни кастюм ва газвор</li>
                <li class="sub-item speciality">Дизайни дохили бино</li>
            </ul>
        </div>
    </div>
    <div class="out" id="out">
        <table class="table">
            <tr data-day="Monday">
                <td class="day" id="Monday">Mondey</td>
                <td class="inputs">
                    <input type="text" id="1">
                    <button class="add-btn" id="add-btn" data-inputId = '1'>Add</button>
                </td>
            </tr>
            <tr data-day="Tuesday">
                <td class="day" id="Tuesday">Mondey</td>
                <td class="inputs">
                    <input type="text" id="2">
                    <button class="add-btn" id="add-btn" data-inputId = '2'>Add</button>
                </td>
            </tr>
            <tr data-day="Wednesday">
                <td class="day" id="Wednesday">Mondey</td>
                <td class="inputs">
                    <input type="text" id="3">
                    <button class="add-btn" data-inputId = '3'>Add</button>
                </td>
            </tr>
            <tr data-day="Thuesday">
                <td class="day" id="Thuesday">Mondey</td>
                <td class="inputs">
                    <input type="text" id="4">
                    <button class="add-btn" data-inputId = '4'>Add</button>
                </td>
            </tr>
            <tr data-day="Friday">
                <td class="day" id="Friday">Mondey</td>
                <td class="inputs">
                    <input type="text" id="5">
                    <button class="add-btn" data-inputId = '5'>Add</button>
                </td>
            </tr>
            <tr data-day="Sunday">
                <td class="day" id="Sunday">Mondey</td>
                <td class="inputs">
                    <input type="text" id="6">
                    <button class="add-btn" data-inputId = '6'>Add</button>
                </td>
            </tr>
            <tr data-day="Saturday">
                <td class="day" id="Saturday">Mondey</td>
                <td class="inputs">
                    <input type="text" id="7">
                    <button class="add-btn" data-inputId = '7'>Add</button>
                </td>
            </tr>
            
        </table>
    </div>
</body>
<script src="./js/main.js"></script>
</html>