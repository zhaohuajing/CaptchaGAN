# CaptchaGAN

This project presents CaptchaGAN, a interactive model we designed to generate Captcha Data with a hierarchical adversery Human-AI Interaction based on Generative Adversarial Network.


## Introduction

Nowadays, captchas are widely used, but the Attackers are even more improved. Some of the captchas are too difficult to be even recognized by a human that wastes users' time on solving them, but simple captchas cannot block bot out such as DNN-based models. The adversary nature between captcha and attackers motivated us to adopt GAN, but instead of using GAN as an End-to-End captcha solver, we combine the GAN and the human deciphering modality, not to decipher old books, but to hierarchically decipher captcha itself, and therefore enhance the robustness of captcha images, generating captchas that are friendly to human but not to a bot.

In the first stage, we implement AdvGAN, which adds perturbations to the original captcha. Different from directly adding noise to the captcha image, AdvGAN attacks the vulnerability of the DNN-based model without too much modification of the original captcha, which means we only slightly modify the captchas, they will get more robust.

In the second stage, we have the human-AI adversary evaluation, where the output captcha candidates from AdvGan are presented to a group of human volunteers and a set of AI captcha solvers. The recognition rates on each of the captcha candidates from the two groups are then recorded, and go through statistical analysis, including repeated measures and paired-wise t-test. 

The candidates with a high recognition rate in the human group and a low recognization rate in AI captcha solvers are labeled as robust captcha when the difference between the two groups reached a threshold and statistically significant. If meets the standard but not above the threshold, they are fed back to the GAN generator as better ground truth with increase weight to re-train the AdvGan. Real-life ground truth is thus provided, as the Human-AI adversary solving is exactly what happened in the captcha's challenge-response identity test.



## AdvGAN
### Environment
torch==1.4.0  
torchvision==0.5.0  
numpy==1.17.4  
pandas==0.25.3  
tensorflow==1.15.2  
matplotlib==3.1.1 

### Usage
#### Download dataset if not exist, train target model, AdvGAN and then test
```
python main.py
```

![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/51.png)
![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/52.png)
![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/53.png)
![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/54.png)
![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/55.png)
![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/56.png)
![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/57.png)
![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/58.png)
![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/59.png)

![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/31.png)
![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/32.png)
![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/33.png)
![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/34.png)
![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/35.png)
![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/36.png)
![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/37.png)
![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/38.png)
![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/Captcha-VUE/src/assets/img/39.png)

## Captcha-VUE

### Environment
vue==2.6.11  
vue-router==3.4.9  
vue-cli==4.5.0  
element-ui==2.14.1  


### Usage
#### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

![image](https://github.com/zhaohuajing/CaptchaGAN/blob/main/GUI.jpg)

## Captcha-Solver

This tensor-flow based 4-layer CNN captcha solver is presented as the simulated AI side of the human-AI evaluations. The python code is an implementation of https://github.com/PatrickLib/captcha_recognize, with a virtual environment set ready to use via
```
. ./captcha_solver/venv/bin/activate
```

The training and validation data are already generated and converted with 50000 captcha samples and 17300 training steps. The script
```
./captcha_solver/captcha_recognize/captcha_match.py
```
is used to check whether the provided captcha images in the UI matches with the target captcha sample.

## Reference
Xiao, Chaowei, et al. "Generating adversarial examples with adversarial networks." arXiv preprint arXiv:1801.02610 (2018).
https://arxiv.org/pdf/1801.02610.pdf  

Modified from  
https://github.com/mathcbc/advGAN_pytorch/blob/master/advGAN.py  
https://github.com/GiorgosKarantonis/Adversarial-Attacks-with-Relativistic-AdvGAN  
https://github.com/PatrickLib/captcha_recognize
