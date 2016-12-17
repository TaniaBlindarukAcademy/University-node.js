/**
 * Created by tania on 6.02.16.
 */

function Block() {

}
Block.prototype.getTextForSkipLessons = function (n) {
    var result = n;
    if (n % 10 === 0) {
        result = n + ' пропущених пар';
    } else if (n % 10 === 1 && n !== 11) {
        result = n + ' пропущена пара';
    } else if ((n % 10 === 2 || n % 10 === 3 || n % 10 === 4) && ( n !== 12 && n !== 13 && n !== 14)) {
        result = n + ' пропущені пари';
    } else {
        result = n + ' пропущених пар';
    }
    return result;
}

Block.prototype.getStudentPhoto = function (student) {
    var photoPath = student.photo;
    if (photoPath) {
        photoPath = '/media/' + photoPath;
    } else {
        if (student.male) {
            photoPath = '/images/person.png';
        } else {
            photoPath = '/images/Female.png';
        }
    }
    return photoPath;
}

Block.prototype.getTextForResponsible = function(male){
    var text = 'Відповідальний! ';
    if(!male){
        text = 'Відповідальна! '
    }
    return text;
};
Block.prototype.getTextForTalent = function(male){
    var text = 'Талановитий! ';
    if(!male){
        text = 'Талановита! '
    }
    return text;
};
Block.prototype.getTextForPositive = function(male){
    var text = 'Позитивний! ';
    if(!male){
        text = 'Позитивна! '
    }
    return text;
};
Block.prototype.getTextForCharisma = function(male){
    var text = 'Харизматичний! ';
    if(!male){
        text = 'Харизматична! '
    }
    return text;
};
Block.prototype.getTextForArsehole = function(male){
    var text = 'Намагався сподоабтися викладачу! ';
    if(!male){
        text = 'Намагалась сподобатися викладачу! '
    }
    return text;
};
module.exports = new Block();