import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

class MiddlePage extends StatelessWidget {
  const MiddlePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Vx.purple700,
      child: Flex(
        direction: context.isMobile ? Axis.vertical : Axis.horizontal,
        children: [
          "Conhecimento Técnico\n"
              .richText
              .withTextSpanChildren([
                "Tecnologias.".textSpan.yellow400.make(),
              ])
              .xl4
              .white
              .make(),
          16.heightBox,
          Expanded(
            child: VxSwiper(
              items: const [
                TechWidget(name: "Flutter"),
                TechWidget(name: "Dart"),
                TechWidget(name: "Firebase"),
                TechWidget(name: "Android"),
                TechWidget(name: "Kotlin"),
                TechWidget(name: "iOS"),
                TechWidget(name: "Node"),
                TechWidget(name: "Javascript"),
              ],
              height: 170,
              enlargeCenterPage: true,
              viewportFraction: context.isMobile ? 0.64 : 0.3,
              autoPlay: true,
              autoPlayAnimationDuration: 1.seconds,
            ),
          )
        ],
      ).p64().h(context.isMobile ? 500 : 300),
    );
  }
}

class TechWidget extends StatelessWidget {
  final String name;
  const TechWidget({
    Key? key,
    required this.name,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return name.text.bold.white.xl.wide.center
        .make()
        .box
        .p8
        .roundedLg
        .alignCenter
        .square(200)
        .neumorphic(
          color: Vx.purple700,
          elevation: 4,
          curve: VxCurve.flat,
        )
        .make()
        .px16();
  }
}
