�o�[�W������r78���g�p

���{��œ��T�Ƃ���VR�A�v���J����MikuMikuDance���f���̓ǂݍ��݂��Ẳ���t��

2015�N���݁A���ɖw�ǂ̃u���E�U��WebGL�ɑΉ����Ă���

WebGL���ő���ɐ������ɂ̓V�F�[�_�[������g���K�v�����邪�A
Three.js���g����JavaScript API��ʂ��ĊȒP�Ɏg����

��01�� ���߂Ă�3D�V�[���쐬

WebGL���g�����ŁA�O���t�B�b�N�X�J�[�h�̏����\�͂𒼐ڗ��p����2D/3D�O���t�B�b�N�X���g�p�o����B
�i����CPU�ɂ��v�Z�ŏ����j

Eye texture raytracer. 
http://www.vill.ee/eye/

three.js editor
https://threejs.org/editor/

����m�F�ɂ̓��[�J���ŃT�[�o�[�𗧂Ă�K�v������
�����̏ꍇ�Apython3.x�����āA
python -m http.server

Mongoose���g���ΕK�v�ȃf�B���N�g����Mongoose�����s���邾���ŊȈՃT�[�o�[�𗧂��グ����
https://github.com/cesanta/mongoose
https://mongoose.ws/
Download Mongoose

1.4 3D�I�u�W�F�N�g�̕\��
plane ... �񎟌��̒����`�A�n�ʂɎg�p
cube ... �O�����̗����́A�ԐF�ŕ\��
sphere ... �O�����̋��́A�F�ŕ\��
camera ... ��ʂɂ͕\������Ȃ��A�����o�͂Ɋ܂߂邩���߂�
axes ... x, y, z���A�f�o�b�O�p�̃c�[���Ax�i�ԁj, y�i�΁j, z�i�j�ŕ\�������

1.6
setInterval()�̓u���E�U���^�u�̏�Ԃ��l�����Ȃ��A��ʂ̍ĕ`��Ƃ͓�������Ȃ����̖��_������
requestAnimationFrame()���g���A�u���E�U�ɂ���Ē�`���ꂽ�Ԋu�ŌĂяo����A�u���E�U���o���邾�����炩�ɕ`�悳��鎖���ۏ؂����



��02�� �V�[���̊�{�v�f

2.1 �V�[���̍쐬

�V�[���\���ɕK�v�ȃR���|�[�l���g
camera ... �V�[���ɉ���`�悷�邩���߂�
light ... �}�e���A�����ǂ̂悤�ɕ\������A�e���ǂ̂悤�Ɏg�p����邩
object ... �J�������_���ɕ\������镨�́A���̂◧����

Three.SCENE�̓I�u�W�F�N�g��S�ĕێ�����R���e�i
Three.SCENE�͂̓V�[���O���t�Ƃ��Ă΂�A�m�[�h��؍\���ŕێ�����
Three.SCENE��Three.Object3D�ichildren�����j���p�����Ă���

Three.Scene.add() ... �I�u�W�F�N�g���V�[���ɒǉ�
Three.Scene.remove() ... �I�u�W�F�N�g���V�[������폜
Three.Scene.children ... �V�[�����̑S�Ă̎q�v�f���擾
Three.Scene.getObjectByName ... ���O���w�肵�ăV�[���������̃I�u�W�F�N�g���擾

