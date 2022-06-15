FROM ubuntu:18.04
# 镜像更新地址
RUN sed -e 's|http://archive.ubuntu.com|http://mirrors.aliyun.com|g'\
        -e 's|http://security.ubuntu.com|http://mirrors.aliyun.com|g'\
        -i.bak /etc/apt/sources.list
RUN apt-get update

# 系统语言设置
ENV LANG=C.UTF-8

# 系统时区
ENV TZ=Asia/Shanghai

# nginx/git
RUN apt-get install -y nginx

# 启动服务
ENV PROJECT_NAME=blog_frontend
WORKDIR /etc/nginx/sites-available/
RUN rm default && rm ../sites-enabled/default
RUN echo "server {\n\tlisten 80;\n\troot /data/$PROJECT_NAME/dist;\n\tserver_name _;\n}" > $PROJECT_NAME
RUN ln -s /etc/nginx/sites-available/$PROJECT_NAME /etc/nginx/sites-enabled/$PROJECT_NAME
EXPOSE 80/tcp
ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]
WORKDIR /data/
VOLUME ["/data/"]
