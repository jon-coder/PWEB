import 'dart:math';
import 'package:flutter/material.dart';

import 'package:flutter_svg/svg.dart';
import 'package:unicons/unicons.dart';

import 'package:portifolio_web/app_colors.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:velocity_x/velocity_x.dart';

class HeaderPage extends StatelessWidget {
  const HeaderPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var nameWidget =
        "João\nCamargo".text.white.xl6.lineHeight(1).size(context.isMobile ? 16 : 24).bold.make().shimmer();

    return SafeArea(
      child: VxBox(
        child: VStack(
          [
            ZStack([
              const PictureWidget(),
              Row(
                children: [
                  VStack([
                    const CustomAppBar().shimmer(
                      primaryColor: AppColors.accentColor,
                    ),
                    32.heightBox,
                    nameWidget,
                    24.heightBox,
                    VxBox()
                        .color(AppColors.accentColor)
                        .size(160, 12)
                        .make()
                        .shimmer(primaryColor: AppColors.accentColor),
                    24.heightBox,
                    const SocialAccounts(),
                  ]).pSymmetric(h: context.percentHeight * 4, v: 32),
                  Expanded(
                    child: VxResponsive(
                      fallback: const Offstage(),
                      large: const IntroductionWidget()
                          .pOnly(left: context.percentWidth * 32)
                          .h(context.percentHeight * 40),
                    ),
                  ),
                ],
              ).w(context.screenWidth),
            ]),
          ],
        ),
      ).size(context.screenWidth, context.percentHeight * 64).color(AppColors.secundaryColor).make(),
    );
  }
}

class PictureWidget extends StatelessWidget {
  const PictureWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Transform(
      alignment: Alignment.center,
      transform: Matrix4.rotationY(pi),
      child: Center(
        child: Padding(
          padding: const EdgeInsets.only(top: 32.0),
          child: SvgPicture.asset(
            'assets/mobile-dev2.svg',
            fit: BoxFit.fitWidth,
            height: context.percentHeight * 60,
          ),
        ),
      ),
    );
  }
}

class CustomAppBar extends StatelessWidget {
  const CustomAppBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Icon(
          UniconsLine.android,
          size: 80,
          color: AppColors.accentColor,
        ),
        Icon(
          UniconsLine.brackets_curly,
          size: 80,
          color: AppColors.accentColor,
        ),
        Icon(
          UniconsLine.mobile_android,
          size: 80,
          color: AppColors.accentColor,
        ),
      ],
    );
  }
}

class SocialAccounts extends StatelessWidget {
  const SocialAccounts({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return [
      const Icon(
        UniconsLine.github,
        color: Colors.white,
        size: 42,
      ).click(() async {
        await launch('https://www.google.com/');
      }).make(),
      20.widthBox,
      const Icon(
        UniconsLine.linkedin,
        color: Colors.white,
        size: 42,
      ).click(() {
        launch('https://www.google.com/');
      }).make()
    ].hStack();
  }
}

class IntroductionWidget extends StatelessWidget {
  const IntroductionWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 64.0),
      child: VStack([
        " - Introdução".text.gray600.widest.xl.make(),
        8.heightBox,
        "Mobile Engineer\ncom experiência no desenvolvimento\nde soluções cross-platform."
            .text
            .white
            .xl2
            .maxLines(4)
            .make()
            .w(context.isMobile ? context.screenWidth : context.percentWidth * 40),
        24.heightBox,
      ]),
    );
  }
}
