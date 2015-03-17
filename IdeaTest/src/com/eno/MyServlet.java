package com.eno;

import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by enoy on 15/1/21.
 */
public class MyServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

        try {
            PrintWriter out = response.getWriter();
            out.print("Hello Eno!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

        doPost(request, response);
    }
}
